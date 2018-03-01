module.exports = (app, Hue) => {
  /**
   * Get all lights
   *
   * @Return (Object)
   */
  app.get('/api/lights', async (req, res) => {
    try {
      const result = await Hue.getLights();
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  });

  /**
   * Get Light By Id
   *
   * @Param Number id
   * @Return Object
   */
  app.get('/api/lights/:id', async (req, res) => {
    try {
      const result = await Hue.getLightById(req.params.id);
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  });
  return app;
};