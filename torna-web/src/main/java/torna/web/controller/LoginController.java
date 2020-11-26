package torna.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import torna.common.annotation.NoLogin;
import torna.common.bean.LoginUser;
import torna.common.bean.Result;
import torna.common.bean.TokenManager;
import torna.common.bean.User;
import torna.common.context.UserContext;
import torna.common.util.GenerateUtil;
import torna.service.PermissionService;
import torna.service.UserInfoService;
import torna.service.dto.UserPermDTO;
import torna.web.controller.param.LoginForm;
import torna.web.controller.vo.LoginResult;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Objects;
import java.util.UUID;

/**
 * @author tanghc
 */
@RestController
@RequestMapping("common")
public class LoginController {

    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private PermissionService permissionService;

    @Autowired
    private TokenManager tokenManager;

    @PostMapping("login")
    @NoLogin
    public Result<LoginResult> login(@RequestBody @Valid LoginForm param) {
        String username = param.getUsername();
        String password = userInfoService.getDbPassword(username, param.getPassword());
        LoginUser loginUser = userInfoService.getLoginUser(username, password);
        String token = UUID.randomUUID().toString();
        tokenManager.setUser(token, loginUser);
        UserPermDTO userPerm = permissionService.getUserPerm(loginUser);
        LoginResult loginResult = new LoginResult();
        loginResult.setToken(token);
        loginResult.setUserPerm(userPerm);
        return Result.ok(loginResult);
    }

    @GetMapping("logout")
    public Result logout(HttpServletRequest request) {
        String token = UserContext.getToken(request);
        tokenManager.removeUser(token);
        return Result.ok();
    }

}
