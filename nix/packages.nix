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
    system,
    ...
  }: {
    options = {
      defaultPackages = mkOption {
        description = mdDoc "Packages required by all stages";
        default = with pkgs; [
          bash
          git
          go-task
          coreutils
          nodejs
        ];
        type = types.listOf types.package;
      };
    };
  });
}
