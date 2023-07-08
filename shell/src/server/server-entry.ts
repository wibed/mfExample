

export default () =>
  async (req, res, next) => {
    const { default: renderer } = await import('./render');
    return renderer(req, res, next);
  };
