package torna.sdk.request;

import lombok.Getter;
import lombok.Setter;
import torna.sdk.param.EnumItemCreateParam;
import torna.sdk.response.EnumPushResponse;

import java.util.List;

/**
 * 推送枚举
 * 接口名	enum.push	版本号	1.0
 * @author tanghc
 */
@Getter
@Setter
public class EnumPushRequest extends BaseRequest<EnumPushResponse> {

    /** 枚举名称 */
    private String name;

    /** 枚举说明 */
    private String description;

    /** 枚举项 */
    private List<EnumItemCreateParam> items;

    public EnumPushRequest(String token) {
        super(token);
    }

    @Override
    public String name() {
        return "enum.push";
    }
}
