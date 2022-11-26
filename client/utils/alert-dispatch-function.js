function handStatus(
  fn,
  type = "",
  message = "",
  title = "",
  position = "topR"
) {
  fn({
    type,
    message,
    title,
    position,
  });
}

export { handStatus };
