{
  lib,
  inputs,
  ...
}: let
  inherit (lib) mkOption mdDoc types;
  inherit (inputs.flake-parts.lib) mkPerSystemOption;
in {
  options.perSystem = mkPerSystemOption ({
    pkgs,
    config,
    ...
  }:
  {
    options = {
      checksPackages = mkOption {
        description = mdDoc "Packages used to check the repo";
        default = with pkgs;
          [ typos ] ++ config.defaultPackages;
        type = types.listOf types.package;
      };
    };
  });
  config.perSystem = {
    config,
    pkgs,
    ...
  }: {
    checks = {
      lint = pkgs.mkShell {
        buildInputs = config.checksPackages;
        shellHook = ''
          export TASK_TEMP_DIR=\$\{XDG_CACHE_HOME:-\$\{HOME\}/.cache\}/sellsy
          mkdir -p \$\{TASK_TEMP_DIR\}
          ${pkgs.go-task}/bin/task lint --verbose --output prefixed
        '';
      };
    };
  };
}
