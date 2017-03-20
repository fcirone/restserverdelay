var appRouter = function(app) {
  app.get("/", function(req, res) {

    var delay = Math.random() * (60 - 1) + 1;

    setTimeout(function() {
      res.send("Rest delay");
      console.log(Math.floor(delay * 1000));
    }, Math.floor(delay * 1000));
 });
};

module.exports = appRouter;
