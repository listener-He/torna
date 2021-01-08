package torna.common.enums;

/**
 * @author tanghc
 */
public enum StatusEnum {
    DISABLED((byte)0),
    ENABLE((byte)1),
    ;

    private final byte status;

    StatusEnum(byte style) {
        this.status = style;
    }

    public byte getStatus() {
        return status;
    }
}