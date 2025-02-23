# Most of this was ~~stolen~~ taken without shame from:
# https://github.com/Alexnortung/block-busters/blob/main/nix-packages/app.nix
#
# There currenytly isn't a Bun builder in nixpkgs, whilst there is a PR open,
# progress seems kinda slow on it.
# issue: https://github.com/NixOS/nixpkgs/issues/255890
# pr:    https://github.com/NixOS/nixpkgs/pull/376299
{
  pkgs,
  version,
}:
with pkgs; let
  pname = "headscale-ui";
  src = ./.;

  node_modules = stdenv.mkDerivation {
    inherit src version;
    pname = "${pname}-node_modules";
    impureEnvVars =
      lib.fetchers.proxyImpureEnvVars
      ++ ["GIT_PROXY_COMMAND" "SOCKS_SERVER"];
    nativeBuildInputs = [bun];
    dontConfigure = true;
    buildPhase = ''
      bun install --no-progress --frozen-lockfile
    '';
    installPhase = ''
      ls -lah node_modules
      mkdir -p $out/node_modules
      cp -R ./node_modules $out/node_modules
    '';
    dontFixup = true;
    dontPatchShebangs = true;
    outputHash = "sha256-KHV5Oym6kzDPCr/CC7cnNjNSLn5uqB1jBuqu84ThaX4=";
    outputHashAlgo = "sha256";
    outputHashMode = "recursive";
  };
in
  stdenv.mkDerivation {
    inherit pname src version;
    buildInputs = [bun];
    nativeBuildInputs = [makeBinaryWrapper];

    dontConfigure = true;

    buildPhase = ''
      ln -s ${node_modules}/node_modules ./
      ls -lah ./node_modules/vite/bin
      bun ./node_modules/vite/bin/vite.js build
    '';

    installPhase = ''
      mkdir -p $out
      cp -r build/ $out
    '';
  }
