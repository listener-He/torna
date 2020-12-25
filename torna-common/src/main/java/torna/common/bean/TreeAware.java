package torna.common.bean;

import java.util.List;

/**
 * @author tanghc
 */
public interface TreeAware<T, IdType> {
    IdType getId();
    IdType getParentId();

    void setChildren(List<T> children);
}
