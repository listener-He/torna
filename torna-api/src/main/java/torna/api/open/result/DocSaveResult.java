package torna.api.open.result;

import com.alibaba.fastjson.annotation.JSONField;
import com.gitee.easyopen.doc.DataType;
import com.gitee.easyopen.doc.annotation.ApiDocField;
import lombok.Data;
import torna.common.support.IdCodec;

/**
 * @author tanghc
 */
@Data
public class DocSaveResult {
    @ApiDocField(description = "文档id", dataType = DataType.STRING, example = "Br2jqzG7")
    @JSONField(serializeUsing = IdCodec.class, deserializeUsing = IdCodec.class)
    private Long id;

}
