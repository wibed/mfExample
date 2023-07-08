

export default () =>
  async (req, res, next) => {
    const renderer = await import('./render');
    return renderer.default(req, res, next);
  };
