export default function transform (data, length, options) {
  for (var i = 0; i < length; i += 4) {
    data[i] += options.adjustment
    data[i + 1] += options.adjustment
    data[i + 2] += options.adjustment
  }
};
