package com.yan.common.lang;

import lombok.Data;

import java.io.Serializable;

@Data
public class Result implements Serializable {

    private int code; //200 正常  反之 异常
    private String message;
    private Object data;

    public static Result Success(Object data){
        return Success(200,"操作成功",data);
    }
    public static Result Success(String msg){
        return Success(200,msg,null);
    }
    public static Result Fail(String msg){
        return Fail(400,msg,null);
    }
    public static Result Fail(String msg,Object data){
        return Fail(400,msg,data);
    }

    public static Result Success(int code, String msg, Object data){
        Result r = new Result();
        r.setCode(code);
        r.setData(data);
        r.setMessage(msg);
        return r;
    }

    public static Result Fail(int code, String msg, Object data){
        Result r = new Result();
        r.setCode(code);
        r.setData(data);
        r.setMessage(msg);
        return r;
    }
}
