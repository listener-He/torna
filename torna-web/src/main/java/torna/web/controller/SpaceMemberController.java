package torna.web.controller;

import com.gitee.fastmybatis.core.support.PageEasyui;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import torna.common.annotation.HashId;
import torna.common.bean.Result;
import torna.common.enums.RoleEnum;
import torna.service.SpaceService;
import torna.service.dto.SpaceUserInfoDTO;
import torna.service.dto.UserInfoDTO;
import torna.web.controller.param.SpaceMemberAddParam;
import torna.web.controller.param.SpaceMemberRemoveParam;
import torna.web.controller.param.SpaceMemberUpdateParam;

import javax.validation.Valid;
import java.util.List;

/**
 * 空间成员
 * @author tanghc
 */
@RestController
@RequestMapping("space/member")
public class SpaceMemberController {

    @Autowired
    private SpaceService spaceService;

    @GetMapping("/search")
    public Result<List<UserInfoDTO>> search(
            @HashId
            Long spaceId
            , @RequestParam(required = false) String username
    ) {
        List<UserInfoDTO> userInfoDTOS = spaceService.searchSpaceUser(spaceId, username);
        return Result.ok(userInfoDTOS);
    }

    /**
     * 分页查询空间成员
     * @return
     */
    @GetMapping("/page")
    public Result<PageEasyui<SpaceUserInfoDTO>> page(
            @HashId
             Long spaceId
            , @RequestParam(required = false) String username
    ) {
        PageEasyui<SpaceUserInfoDTO> pageSpaceUser = spaceService.pageSpaceUser(spaceId, username);
        return Result.ok(pageSpaceUser);
    }


    /**
     * 添加空间成员
     * @param param
     * @return
     */
    @PostMapping("/add")
    public Result add(@RequestBody @Valid SpaceMemberAddParam param) {
        spaceService.addSpaceUser(param.getSpaceId(), param.getUserIds(), RoleEnum.of(param.getRoleCode()));
        return Result.ok();
    }

    /**
     * 修改成员
     * @param param
     * @return
     */
    @PostMapping("update")
    public Result update(@RequestBody @Valid SpaceMemberUpdateParam param) {
        spaceService.updateSpaceUserRole(
                param.getSpaceId()
                , param.getUserId()
                , RoleEnum.of(param.getRoleCode())
        );
        return Result.ok();
    }

    /**
     * 移除空间成员
     * @param param
     * @return
     */
    @PostMapping("/remove")
    public Result remove(@RequestBody @Valid SpaceMemberRemoveParam param) {
        spaceService.removeMember(param.getSpaceId(), param.getUserId());
        return Result.ok();
    }

}
