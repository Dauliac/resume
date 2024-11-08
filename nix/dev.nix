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
  }: {
    options = {
      devPackages = mkOption {
        description = mdDoc "Packages used to build the repo";
        default = with pkgs;
          [
            git
            glow
            less
            lefthook
          ]
          ++ config.defaultPackages
          ++ config.checksPackages
          ++ config.formatterPackages;
        type = types.listOf types.package;
      };
      shellHook = mkOption {
        description = mdDoc "Default devShell shell hook";
        default = ''
          export PATH=$PATH:$(pwd)/node_modules/.bin
          export SOPS_AGE_KEY_FILE=~/.config/sops/age/dotfiles.txt
          rm -f .env
          sops -d data.secret.env > .env
          source .env
          if [ -f Taskfile.dist.yaml ]; then
            task init
          fi
        '';
        type = types.string;
      };
    };
  });
  config.perSystem = {
    pkgs,
    config,
    ...
  }: {
    devShells.default = pkgs.mkShell {
      nativeBuildInputs = config.devPackages;
      inherit (config) shellHook;
    };
  };
}
