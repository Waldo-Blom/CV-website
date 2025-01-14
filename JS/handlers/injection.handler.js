const TEMPLATE_DIRECTORY = "../templates";

/**
 * Class to handle the injection of HTML templates into the DOM
 * @example
 * const injection = new InjectionHandler().container(projectsHolder);
 * await injection.template("/components/projectcard.html");
 * for (const [key, value] of projects) {
 *  injection
 *   .insertProps({
 *    name: value.title,
 *    duration: value.duration,
 *    projectType: value.projecttype,
 *   nqfLevel: value.level,
 *   imageLink: `/assets/images/project/${key}.jpg`,
 *   shortDescription: value.description,
 *  }).inject();
 * }
 */

export class InjectionHandler {
  DOMcontainer;
  templateHTML;
  props;

  container(container) {
    this.DOMcontainer = container;
    return this;
  }

  async template(template) {
    const templateResponse = await fetch(`${TEMPLATE_DIRECTORY}/${template}`);
    this.templateHTML = await templateResponse.text();
    return this;
  }

  insertProp(prop, value) {
    if (this.props == undefined) this.props = new Map();

    // Handle arrays specifically
    if (Array.isArray(value)) {
      value = value.map((item) => `<li>${item}</li>`).join(""); // Format as list items
    }

    this.props.set(prop, value);
    return this;
  }

  insertProps(props) {
    if (typeof props !== "object") throw new Error("Props must be an object");
    for (const [key, value] of Object.entries(props)) this.insertProp(key, value);
    return this;
  }

  inject() {
    if (this.templateHTML == undefined) throw new Error("Template not set");
    if (this.props == undefined) throw new Error("Placeholders not set");
    let template = this.templateHTML;
    for (const [key, value] of this.props) template = template.replaceAll(`{${key}}`, value);
    this.DOMcontainer.insertAdjacentHTML("beforeend", template);
    this.props.clear();
  }
}
