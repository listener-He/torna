package torna.service;

import com.gitee.fastmybatis.core.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import torna.common.bean.Booleans;
import torna.common.bean.User;
import torna.common.enums.ModuleTypeEnum;
import torna.common.support.BaseService;
import torna.common.util.CopyUtil;
import torna.common.util.GenerateUtil;
import torna.dao.entity.Module;
import torna.dao.mapper.ModuleMapper;
import torna.service.dto.DocInfoDTO;
import torna.service.dto.ImportSwaggerDTO;
import torna.service.dto.ModuleDTO;

import java.util.List;

/**
 * @author tanghc
 */
@Service
public class ModuleService extends BaseService<Module, ModuleMapper> {

    @Autowired
    private DocInfoService docInfoService;

    public ModuleDTO getModuleDTO(long moduleId) {
        Module module = getById(moduleId);
        ModuleDTO moduleDTO = CopyUtil.copyBean(module, ModuleDTO::new);
        List<DocInfoDTO> docInfoDTOS = docInfoService.listDocDetail(moduleId);
        moduleDTO.setDocInfoList(docInfoDTOS);
        return moduleDTO;
    }

    public List<Module> listProjectModules(long projectId) {
        return list("project_id", projectId);
    }

    public Module addModule(String name, long projectId, User user) {
        Module module = new Module();
        module.setType(ModuleTypeEnum.CUSTOM_ADD.getType());
        module.setName(name);
        module.setProjectId(projectId);
        module.setCreateMode(user.getOperationModel());
        module.setCreatorId(user.getUserId());
        module.setModifierId(user.getUserId());
        module.setToken(createToken());
        save(module);
        return module;
    }

    /**
     * 创建swagger导入模块
     * @param importSwaggerDTO 导入配置
     * @param name 模块名称
     * @return 返回模块对象
     */
    public Module createSwaggerModule(ImportSwaggerDTO importSwaggerDTO, String name) {
        Assert.notNull(name, () -> "name不能为空");
        User user = importSwaggerDTO.getUser();
        Long projectId = importSwaggerDTO.getProjectId();
        Module module = getByProjectIdAndName(projectId, name);
        if (module == null) {
            module = new Module();
            module.setName(name);
            module.setProjectId(projectId);
            module.setType(ModuleTypeEnum.SWAGGER_IMPORT.getType());
            module.setImportUrl(importSwaggerDTO.getImportUrl());
            module.setBasicAuthUsername(importSwaggerDTO.getBasicAuthUsername());
            module.setBasicAuthPassword(importSwaggerDTO.getBasicAuthPassword());
            module.setToken(createToken());
            module.setCreateMode(user.getOperationModel());
            module.setModifyMode(user.getOperationModel());
            module.setCreatorId(user.getUserId());
            module.setModifierId(user.getUserId());
            this.save(module);
        } else {
            module.setType(ModuleTypeEnum.SWAGGER_IMPORT.getType());
            module.setImportUrl(importSwaggerDTO.getImportUrl());
            module.setBasicAuthUsername(importSwaggerDTO.getBasicAuthUsername());
            module.setBasicAuthPassword(importSwaggerDTO.getBasicAuthPassword());
            module.setModifyMode(user.getOperationModel());
            module.setModifierId(user.getUserId());
            module.setIsDeleted(Booleans.FALSE);
            this.update(module);
        }
        return module;
    }

    public Module getByToken(String token) {
        Assert.notNull(token, () -> "token不能为null");
        return this.get("token", token);
    }

    public static String createToken() {
        return GenerateUtil.getUUID();
    }

    public Module getByProjectIdAndName(long projectId, String name) {
        Query query = new Query()
                .eq("project_id", projectId)
                .eq("name", name);
        return get(query);
    }

    public void delete(long moduleId, User user) {
        if (user.isSuperAdmin()) {
            Module module = getById(moduleId);
            module.setModifierId(user.getUserId());
            this.delete(module);
        }
    }

}