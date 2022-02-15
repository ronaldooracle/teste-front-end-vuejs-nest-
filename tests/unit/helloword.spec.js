import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import sinon from "sinon";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const components = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(components.text()).toMatch(msg);
  });
});

describe("HelloWorld.vue", () => {
  it("validando msg interna  ", () => {
    const msg = "Hello world";
    const components = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(components.text()).toContain("Hello world");
  });
});

describe("HelloWorld.vue", () => {
  it("validando função de contar ", async () => {
    const components = shallowMount(HelloWorld);
    const button = components.find("button");
    const text = components.find("p");

    expect(text.text()).toContain("Total clicks: 0");

    await button.trigger("click");

    expect(text.text()).toContain("Total clicks: 1");
  });
});

