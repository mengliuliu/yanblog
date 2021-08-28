package com.yan.controller;

import com.yan.common.lang.Result;
import com.yan.entity.User;
import com.yan.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author yhf
 * @since 2021-08-28
 */
@RestController
@Api(tags = "用户管理")
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @ApiOperation("查询用户信息")
    @GetMapping("/list")
    public Result GetUserList() {
        List<User> user = userService.list();
        if(!StringUtils.isEmpty(user)){
            return Result.Success(user);
        }else{
            return Result.Fail("未查询到数据");
        }
    }

    @ApiOperation("查询用户信息")
    @GetMapping("/detail")
    public Result GetUserById(@RequestParam String Id) {
        User user = userService.getById(Id);
        if(!StringUtils.isEmpty(user)){
            return Result.Success(user);
        }else{
            return Result.Fail("未查询到数据");
        }
    }

    @ApiOperation("添加用户")
    @PostMapping("/add")
    public Result AddUser(@RequestBody() User data) {
       boolean result = userService.saveOrUpdate(data);
       if(result){
           return Result.Success("添加成功");
       }else{
           return Result.Fail("添加失败");
       }
    }

    @ApiOperation("删除用户")
    @DeleteMapping("/delete")
    public Result Delete(@RequestParam String Id) {
        boolean result = userService.removeById(Id);
        if(result){
            return Result.Success("删除成功");
        }else{
            return Result.Fail("删除失败");
        }
    }



}
