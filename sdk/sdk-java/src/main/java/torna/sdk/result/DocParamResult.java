package torna.sdk.result;

import lombok.Data;

import java.util.Date;

/**
 * @author tanghc
 */
@Data
public class DocParamResult {
    private String id;

    /** 字段名称 */
    private String name;

    /** 字段类型 */
    private String type;

    /** 是否必须，1：是，0：否 */
    private Byte required;

    /** 最大长度 */
    private String maxLength;

    /** 示例值 */
    private String example;

    /** 描述 */
    private String description;

    /** doc_info.id */
    private String docId;

    /** 父节点 */
    private String parentId;

    /** 0：header, 1：请求参数，2：返回参数，3：错误码 */
    private Byte style;

    /** 创建人 */
    private String creator;

    /** 修改人 */
    private String modifier;

    /** 创建时间 */
    private Date gmtCreate;

    /** 最后修改时间 */
    private Date gmtModified;

}
