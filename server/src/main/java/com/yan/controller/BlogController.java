package com.yan.controller;


import com.yan.common.lang.Result;
import com.yan.entity.Blog;
import com.yan.service.BlogService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author yhf
 * @since 2021-08-28
 */
@RestController
@RequestMapping("/blog")
public class BlogController {
    @Autowired
    BlogService blogService;

    @ApiOperation(value = "查询文章列表")
    @GetMapping("/list")
    public Result getArticleList(){
        List<Blog> ArticleList = blogService.list();
        if(!StringUtils.isEmpty(ArticleList)){
            return Result.Success(ArticleList);
        }else{
            return Result.Fail("未查询到数据");
        }
    }

}
