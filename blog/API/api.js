const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://RedFox95:<jQ9M5qNyoUt3YpWb>@blog.idz8gix.mongodb.net/?retryWrites=true&w=majority&appName=Blog', { useNewUrlParser: true, useUnifiedToplogy: true});

const postSchema = new mongoose.Schema({
    text: String,
});

const Post = mongoose.model('Post', postSchema);

app.post('/posts', (req, res) => {
    const post = new Post({ text: req.body.text});
    post.save((err, post) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error creating post' });
        } else {
            res.send(post);
        }
    });
});

app.get('/posts', (req, res) => {
    Post.find().then((posts) => {
        res.send(posts);
    });
});

app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    Post.findById(id).then((post) => {
        if (!post) {
            res.status(404).send({ message: 'Post not found' });
        } else {
            res.send(post);
        }
    });
});

app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    Post.findByIdAndUpdate(id, { text: req.body.text, author: req.body.author }, { new: true })
        .then((post) => {
            if (!post) {
                res.status(404).send({ message: 'Post not found' });
            } else {
                res.send(post);
            }
        });
});

app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    Post.findByIdAndRemove(id)
        .then(() => {
            res.send({ message: 'Post deleted successfully' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ message: 'Error deleting post' });
        });
});

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
});