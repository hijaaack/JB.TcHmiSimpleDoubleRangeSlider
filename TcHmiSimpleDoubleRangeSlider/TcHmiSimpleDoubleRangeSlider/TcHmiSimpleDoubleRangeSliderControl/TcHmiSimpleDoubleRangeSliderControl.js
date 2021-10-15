/*
 * Generated 10/12/2021 3:26:21 PM
 * Copyright (C) 2021
 */
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let TcHmiSimpleDoubleRangeSlider;
        (function (TcHmiSimpleDoubleRangeSlider) {
            class TcHmiSimpleDoubleRangeSliderControl extends TcHmi.Controls.System.TcHmiControl {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TcHmiSimpleDoubleRangeSlider_TcHmiSimpleDoubleRangeSliderControl-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    this.__elementRangeSliderDiv = this.__elementTemplateRoot.find('.range-slider');
                    this.__elementRangeSliderInputA = this.__elementRangeSliderDiv.find('.range-slider-input-a');
                    this.__elementRangeSliderInputB = this.__elementRangeSliderDiv.find('.range-slider-input-b');
                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                    var $this = this;
                    this.__elementRangeSliderInputA.on('change', function (e) {
                        $this.__sliderInputChange(e, $this, true);
                    });
                    this.__elementRangeSliderInputB.on('change', function (e) {
                        $this.__sliderInputChange(e, $this, false);
                    });
                }
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
                    super.__detach();
                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                    this.__elementRangeSliderInputA.off('change');
                    this.__elementRangeSliderInputB.off('change');
                }
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                    * Free resources like child controls etc.
                    */
                }
                /**
                * Gets the value of __max
                * @returns The current value of Max
                */
                getMax() {
                    return this.__max;
                }
                /**
                 * Sets the value of Max
                 * @param valueNew The new value for Max
                 */
                setMax(valueNew) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue === null || undefined) {
                        convertedValue = this.getAttributeDefaultValueInternal("Max");
                    }
                    //save the new value
                    this.__max = convertedValue;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getMax"]);
                    //Process the new Value
                    this.__processValue();
                }
                /**
                * Gets the value of __min
                * @returns The current value of Min
                */
                getMin() {
                    return this.__min;
                }
                /**
                 * Sets the value of Min
                 * @param valueNew The new value for Min
                 */
                setMin(valueNew) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue === null || undefined) {
                        convertedValue = this.getAttributeDefaultValueInternal("Min");
                    }
                    //save the new value
                    this.__min = convertedValue;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getMin"]);
                    //Process the new Value
                    this.__processValue();
                }
                /**
                * Gets the value of __valueA
                * @returns The current value of Value A
                */
                getValueA() {
                    return this.__valueA;
                }
                /**
                * Sets the value of Value A
                * @param valueNew The new value for Value A
                */
                setValueA(valueNew) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue === null || undefined) {
                        convertedValue = this.getAttributeDefaultValueInternal("ValueA");
                    }
                    //save the new value
                    this.__valueA = convertedValue;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getValueA"]);
                    //Process the new Value
                    this.__processValue();
                }
                /**
                * Gets the value of __valueB
                * @returns The current value of Value B
                */
                getValueB() {
                    return this.__valueB;
                }
                /**
                * Sets the value of Value B
                * @param valueNew The new value for Value B
                */
                setValueB(valueNew) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    //if converted value is null, get internal default
                    if (convertedValue === null || undefined) {
                        convertedValue = this.getAttributeDefaultValueInternal("ValueB");
                    }
                    //save the new value
                    this.__valueB = convertedValue;
                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getValueB"]);
                    //Process the new Value
                    this.__processValue();
                }
                /**
                 * Processes the Values.
                 * @function
                 */
                __processValue() {
                    if (!this.__elementRangeSliderInputA || !this.__elementRangeSliderInputB)
                        return;
                    if (this.__min == undefined || this.__max == undefined || this.__valueA == undefined || this.__valueB == undefined)
                        return;
                    //Write Value to HTML-elements attributes
                    // @ts-ignore
                    this.__elementRangeSliderDiv[0].dataset.ticksPosition = `--min:${this.__min}; --max:${this.__max}; --value-a:${this.__valueA}; --value-b:${this.__valueB}; --text-value-a:"${this.__valueA}; --text-value-b:"${this.__valueB}";`;
                    // @ts-ignore
                    this.__elementRangeSliderDiv[0].attributes[2].nodeValue = `--min:${this.__min}; --max:${this.__max}; --value-a:${this.__valueA}; --value-b:${this.__valueB}; --text-value-a:"${this.__valueA}; --text-value-b:"${this.__valueB}";`;
                    // @ts-ignore
                    this.__elementRangeSliderInputA[0].valueAsNumber = this.__valueA;
                    // @ts-ignore
                    this.__elementRangeSliderInputA[0].min = String(this.__min);
                    // @ts-ignore
                    this.__elementRangeSliderInputA[0].max = String(this.__max);
                    // @ts-ignore
                    this.__elementRangeSliderInputB[0].valueAsNumber = this.__valueB;
                    // @ts-ignore
                    this.__elementRangeSliderInputB[0].min = String(this.__min);
                    // @ts-ignore
                    this.__elementRangeSliderInputB[0].max = String(this.__max);
                }
                /**
                 * Processes the Slider Change Events.
                 * @function
                 */
                __sliderInputChange(e, $this, valueA) {
                    //Set Values
                    valueA ? this.setValueA(e.target.value) : this.setValueB(e.target.value);
                    //raise common event
                    TcHmi.EventProvider.raise($this.getId() + '.onSliderInputChanged');
                    //raise specific event
                    valueA ? TcHmi.EventProvider.raise($this.getId() + '.onSliderInputValueAChanged') : TcHmi.EventProvider.raise($this.getId() + '.onSliderInputValueBChanged');
                }
            }
            TcHmiSimpleDoubleRangeSlider.TcHmiSimpleDoubleRangeSliderControl = TcHmiSimpleDoubleRangeSliderControl;
        })(TcHmiSimpleDoubleRangeSlider = Controls.TcHmiSimpleDoubleRangeSlider || (Controls.TcHmiSimpleDoubleRangeSlider = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('TcHmiSimpleDoubleRangeSlider', 'TcHmi.Controls.TcHmiSimpleDoubleRangeSlider', TcHmi.Controls.TcHmiSimpleDoubleRangeSlider.TcHmiSimpleDoubleRangeSliderControl);
//# sourceMappingURL=TcHmiSimpleDoubleRangeSliderControl.js.map