const express = require('express');
const app = express();
const fs = require('fs');


const movies = JSON.parse(fs.readFileSync('./data/movies.json'));
app.use(express.json());


// GET - api/v1/movies
app.get('/api/v1/movies', (req, res) => {
    res.status(200).json({
        status: "success",
        count: movies.length,
        data: {
            movies
        }
    });
})


// GET - api/v1/movies/id
//1. Here :id is a placeholder, This part of the URL can change.
// 2. /api/v1/movies/:id/:name/:x - all 3 route parameter needed otherwise will get error
// 3. /api/v1/movies/:id/:name{/:x} - using {} we can make them optional now if we w will not provide x it will not give error.
app.get("/api/v1/movies/:id", (req, res) => {
    console.log(req.params);
    const id = Number(req.params.id);
    const findMovie = movies.filter((movie) => {
        return movie.id === id
    })

    if (!findMovie.length) {
        return res.status(404).json({
            status: "failed",
            message: `Movie with the id no - ${id} not found!!`
        })
    }

    res.status(200).json({
      status: "success",
      data: {
        movie: findMovie,
      },
    });
});


// POST - api/v1/movies
app.post('/api/v1/movies', (req, res) => {
    // console.log(req.body);
    const newId = movies[movies.length - 1].id + 1;
    const newMovie = Object.assign({ id: newId }, req.body);

    movies.push(newMovie);

    fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
        res.status(201).json({
          status: "success",
          data: {
            movie: newMovie,
          },
        });
    });
    
    // res.send("Created...")
});


// PATCH - /api/v1/movies/id
app.patch("/api/v1/movies/:id", (req, res) => {

    let id = req.params.id * 1;
    let findMovieToUpdate = movies.find((el) => {
        return el.id === id
    })

    if (!findMovieToUpdate) {
      return res.status(404).json({
        status: "failed",
        message: `Movie with the id no - ${id} not found!!`,
      });
    }

    let index = movies.indexOf(findMovieToUpdate);
    Object.assign(findMovieToUpdate, req.body)
    movies[index] = findMovieToUpdate;

    fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
      res.status(200).json({
        status: "success",
        data: {
          movie: findMovieToUpdate,
        },
      });
    });


});












const port = 3000;
app.listen(port, () => {
    console.log('Server is listening on ' + port);
})