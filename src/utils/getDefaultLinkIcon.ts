export default function getDefaultLinkIcon(type: string, icon?: string) {
  let defaultIcon = "browser";

  // default icon for specific types (e.g. "github")
  switch (type.toLowerCase()) {
    case "github":
      defaultIcon = "github";
      break;
  }

  return icon ?? defaultIcon;
}
