package torna.api.open.result;

import com.alibaba.fastjson.annotation.JSONField;
import com.gitee.easyopen.doc.DataType;
import com.gitee.easyopen.doc.annotation.ApiDocField;
import lombok.Data;
import torna.api.open.param.DocParamParam;
import torna.common.support.IdCodec;

import java.util.List;

/**
 * @author tanghc
 */
@Data
public class DocInfoDetailResult {
    @ApiDocField(description = "文档id", example = "je24ozLJ", required = true)
    @JSONField(serializeUsing = IdCodec.class, deserializeUsing = IdCodec.class)
    private Long id;

    /** 文档名称, 数据库字段：name */
    @ApiDocField(description = "文档名称", required = true, example = "获取商品信息")
    private String name;

    /** 文档概述, 数据库字段：description */
    @ApiDocField(description = "文档概述", example = "获取商品信息")
    private String description;

    /** 访问URL, 数据库字段：url */
    @ApiDocField(description = "url", example = "/goods/get")
    private String url;

    /** http方法, 数据库字段：http_method */
    @ApiDocField(description = "http方法", example = "GET")
    private String httpMethod;

    /** contentType, 数据库字段：content_type */
    @ApiDocField(description = "contentType", example = "application/json")
    private String contentType;

    /** 父节点, 数据库字段：parent_id */
    @JSONField(serializeUsing = IdCodec.class, deserializeUsing = IdCodec.class)
    @ApiDocField(description = "父节点, 没有填空字符串", dataType = DataType.STRING, example = "")
    private Long parentId;

    /** 是否显示, 数据库字段：is_show */
    @ApiDocField(description = "是否显示，1：显示，0：不显示", example = "1")
    private Byte isShow;

    @ApiDocField(description = "请求头", elementClass = DocParamParam.class)
    private List<DocParamResult> headerParams;

    @ApiDocField(description = "请求参数", elementClass = DocParamParam.class)
    private List<DocParamResult> requestParams;

    @ApiDocField(description = "返回参数", elementClass = DocParamParam.class)
    private List<DocParamResult> responseParams;

    @ApiDocField(description = "错误码", elementClass = DocParamParam.class)
    private List<DocParamResult> errorCodeParams;
}
