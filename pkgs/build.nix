{
  pkgs,
  version,
}:
with pkgs; let
  pname = "headscale-ui";
  src = ../.;
in
  stdenv.mkDerivation (finalAttrs: {
    inherit src version pname;

    pnpmDeps = pnpm_10.fetchDeps {
      inherit
        pname
        version
        src
        ;
      hash = "sha256-0ZDHGMiaVfzuD4/DMVA9zYr/qpKyLpsXZpNaJ5QLN9o=";
    };

    nativeBuildInputs = [
      nodejs_22
      pnpm_10.configHook
    ];

    buildInputs = [
      nodejs_22
    ];

    buildPhase = ''
      runHook preBuild
      pnpm build
      runHook postBuild
    '';

    installPhase = ''
      runHook preInstall

      mkdir -p $out/
      cp -r build/ $out

      runHook postInstall
    '';
  })
