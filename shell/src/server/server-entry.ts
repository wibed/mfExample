

export default () => async (req, res, next) => {
    console.log("inentry")
    const { default: renderer } = await import('./render');
    return renderer(req, res, next);
  };
