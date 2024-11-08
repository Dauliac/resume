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
          sops
          garamond-libre
          liberation_ttf_v2
          python312Packages.weasyprint
        ];
        type = types.listOf types.package;
      };
    };
  });
}
