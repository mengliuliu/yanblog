package com.yan.controller;


import com.yan.common.lang.Result;
import com.yan.entity.Blog;
import com.yan.service.BlogService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

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

    @ApiOperation(value = "添加文章")
    @PostMapping("/add")
    public Result AddArticle(@RequestBody Blog blog){
        System.out.println(blog);
       boolean add = blogService.saveOrUpdate(blog);
        if(add){
            return Result.Success("添加成功");
        }else{
            return Result.Fail("添加失败");
        }
    }

    @ApiOperation(value = "删除文章")
    @DeleteMapping("/delete")
    public Result DeleteArticle(@RequestParam Integer id){
        boolean delete = blogService.removeById(id);
        if(delete){
            return Result.Success("删除成功");
        }else{
            return Result.Fail("删除失败");
        }
    }


}
