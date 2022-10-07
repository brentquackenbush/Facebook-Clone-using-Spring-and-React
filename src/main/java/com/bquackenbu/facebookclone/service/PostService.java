package com.bquackenbu.facebookclone.service;

import com.bquackenbu.facebookclone.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
