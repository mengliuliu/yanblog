package com.yan.mapper;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yan.entity.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author yhf
 * @since 2021-08-28
 */
public interface UserMapper extends BaseMapper<User> {
    IPage<User> selectPageVo(Page<?> page, Integer state);
}
