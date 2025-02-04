import { CustomElementMixin } from "../../index";

class BaseClass {
  declare render: () => void;
  declare html: (str: string, ...values: any[]) => string;
  constructor(...args: any[]) {}
}

class ElementTest extends CustomElementMixin(BaseClass) {}

const testInstance: ElementTest = new ElementTest();

const a: boolean = testInstance.enhanced;
const b: () => void = testInstance.render;

// Template test extends BaseClass
const testInstance2: BaseClass = new ElementTest();

// @ts-expect-error BaseClass does extend ElementTest
const c: ElementTest = new BaseClass();
