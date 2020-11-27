package torna.web.interceptor;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import torna.common.bean.User;
import torna.common.context.UserContext;
import torna.common.exception.BizException;
import torna.common.exception.LoginFailureException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author tanghc
 */
public class AdminInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (request.getServletPath().startsWith("/admin")) {
            User user = UserContext.getUser();
            if (user == null) {
                throw new LoginFailureException();
            }
            if (user.isAdmin()) {
                return true;
            }
            throw new BizException("无权访问");
        } else {
            return true;
        }
    }
}
