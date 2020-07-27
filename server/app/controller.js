const UnfilteredApp = require('./model.js');

// Create and Save a new Application
exports.create = (req, res) => {
    //Validate request
    if(!req.body){
        return res.status(400).send({
            message: "Note content cannot be empty"
        });
    }

    const app = new UnfilteredApp({
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        school: req.body.school,
        studies: req.body.studies,
        experience: req.body.experience,
        tools: req.body.tools,
        company: req.body.company,
        awards: req.body.awards,
        cover: req.body.cover,
        linkedin: req.body.linkedin,
        github: req.body.github,
        portfolio: req.body.portfolio,
    })

    app.save()
     .then(data => {
         res.send(data);
     }).catch(err => {
         res.status(500).send({
            message: err.message || "Some error occurred while creating your application"
         })
     })

};

// Retrieve and return all Apps from the database.
exports.findAll = (req, res) => {
    UnfilteredApp.find()
      .then(apps => {
          res.send(apps);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving apps"
          })
      })
};

// Find a single application with an appId
exports.findUnfilteredApp = (req, res) => {
    UnfilteredApp.findById(req.params.appId)
      .then(app => {
          if(!app){
              return res.status(404).send({
                  message: "Application not found with id" + req.params.appId
              });
          }
          res.send(app)
      }).catch( err => {
          if (err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Application not found with id" + req.params.appId
              });
          }
          return res.status(500).send({
              message: "Error retrieving Application with id" + req.params.appId
          })
      })
};

// Find a single application with an appId
exports.findFilteredApp = (req, res) => {
    UnfilteredApp.findById(req.params.appId)
      .then(app => {
        if(!app){
            return res.status(404).send({
                message: "Application not found with id" + req.params.appId
            });
        }
        const filteredApp = {
            phone: app.phone,
            studies: app.studies,
            experience: app.experience,
            cover: app.cover,
            tools: app.tools,
            company: app.company,
            awards: app.awards,
            github: app.github
        }
        res.send(filteredApp);
      }).catch( err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Application not found with id" + req.params.appId
            });
        }
        return res.status(500).send({
            message: "Error retrieving Application with id" + req.params.appId
        })
    })
}