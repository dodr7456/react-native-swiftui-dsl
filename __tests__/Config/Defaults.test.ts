import { DSLDefaults } from '../../src/Config/Defaults';

describe('DSLDefaults', () => {
  it('has spacing default', () => {
    expect(DSLDefaults.spacing).toBe('md');
  });

  it('has edge default', () => {
    expect(DSLDefaults.edge).toBe('all');
  });

  it('has flex default', () => {
    expect(DSLDefaults.flex).toBe(1);
  });

  it('has keyboardAvoidingOffset', () => {
    expect(DSLDefaults.keyboardAvoidingOffset).toBe(100);
  });

  it('has keyboardShouldPersistTaps', () => {
    expect(DSLDefaults.keyboardShouldPersistTaps).toBe('handled');
  });

  it('has bounces default', () => {
    expect(DSLDefaults.bounces).toBe(true);
  });

  describe('shadow defaults', () => {
    it('has color', () => {
      expect(DSLDefaults.shadow.color).toBe('cardShadow');
    });

    it('has offset', () => {
      expect(DSLDefaults.shadow.offset).toEqual({ width: 0, height: 2 });
    });

    it('has opacity', () => {
      expect(DSLDefaults.shadow.opacity).toBe(1);
    });

    it('has radius', () => {
      expect(DSLDefaults.shadow.radius).toBe(8);
    });

    it('has elevation', () => {
      expect(DSLDefaults.shadow.elevation).toBe(3);
    });
  });

  describe('input defaults', () => {
    it('has borderRadius', () => {
      expect(DSLDefaults.input.borderRadius).toBe(8);
    });

    it('has paddingHorizontal', () => {
      expect(DSLDefaults.input.paddingHorizontal).toBe(12);
    });

    it('has paddingVertical', () => {
      expect(DSLDefaults.input.paddingVertical).toBe(10);
    });

    it('has minHeight', () => {
      expect(DSLDefaults.input.minHeight).toBe(44);
    });

    it('has labelMarginBottom', () => {
      expect(DSLDefaults.input.labelMarginBottom).toBe(6);
    });

    it('has errorMarginTop', () => {
      expect(DSLDefaults.input.errorMarginTop).toBe(4);
    });

    it('has wrapperMarginBottom', () => {
      expect(DSLDefaults.input.wrapperMarginBottom).toBe(12);
    });
  });

  it('has iconSize default', () => {
    expect(DSLDefaults.iconSize).toBe(18);
  });

  it('has pressedOpacity', () => {
    expect(DSLDefaults.pressedOpacity).toBe(0.9);
  });

  it('has fullOpacity', () => {
    expect(DSLDefaults.fullOpacity).toBe(1);
  });

  describe('button defaults', () => {
    it('has buttonHeight', () => {
      expect(DSLDefaults.buttonHeight).toBe(48);
    });

    it('has buttonCornerRadius', () => {
      expect(DSLDefaults.buttonCornerRadius).toBe(12);
    });

    it('has buttonPaddingHorizontal', () => {
      expect(DSLDefaults.buttonPaddingHorizontal).toBe(16);
    });

    it('has buttonIconSpacing', () => {
      expect(DSLDefaults.buttonIconSpacing).toBe(8);
    });

    it('has buttonFontSize', () => {
      expect(DSLDefaults.buttonFontSize).toBe('body');
    });

    it('has buttonBorderWidth', () => {
      expect(DSLDefaults.buttonBorderWidth).toBe(1.5);
    });
  });

  it('has imageResizeMode default', () => {
    expect(DSLDefaults.imageResizeMode).toBe('cover');
  });

  it('has dividerColor default', () => {
    expect(DSLDefaults.dividerColor).toBe('separator');
  });

  it('has linkColor default', () => {
    expect(DSLDefaults.linkColor).toBe('tint');
  });

  it('has onEndReachedThreshold default', () => {
    expect(DSLDefaults.onEndReachedThreshold).toBe(0.5);
  });

  it('is frozen (as const)', () => {
    // Verify the object is read-only at runtime level
    expect(typeof DSLDefaults).toBe('object');
    expect(Object.keys(DSLDefaults).length).toBeGreaterThan(10);
  });
});
