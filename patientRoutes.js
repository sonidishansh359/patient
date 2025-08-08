   // Example Node.js route for patients
   router.get('/patients', async (req, res) => {
     try {
       const patients = await Patient.find();
       res.json(patients);
     } catch (err) {
       res.status(500).json({ message: err.message });
     }
   });
   