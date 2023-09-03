export function log(
  msg: any,
  type: "info" | "success" | "error" | "warning" = "info"
) {
  if (type == "error") console.error(msg);
  else console.log(msg);
}
