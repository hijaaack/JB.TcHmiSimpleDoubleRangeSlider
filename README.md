# JB.TcHmiSimpleDoubleRangeSlider for TwinCAT HMI

Simple double range slider control that uses the [ui-range](https://github.com/yairEO/ui-range)

![Simple Double Range Slider](https://user-images.githubusercontent.com/75740551/137483594-c9f0ee01-1913-43b5-96eb-a930d9f7363a.png)

# Installation
Easiest way to install this package is inside your TwinCAT HMI Project. 
**Right click** References and click "Manage NuGet Packages.." then browse for the file and install it! 

![enter image description here](https://user-images.githubusercontent.com/75740551/101645035-32cef100-3a36-11eb-88f4-eeaccd3366d6.png)

# Configuration
When you bind your symbol to the control. Make sure the databinding is **TwoWay** so the control can change the value of the binding.

To change the binding mode, **Right Click** the symbol and chose **Edit symbol..**

![Properties](https://user-images.githubusercontent.com/75740551/137483571-a44d55fe-1027-4304-a52e-81e0ba62d31e.png)

The control also have a custom events that fires on change.

![Events](https://user-images.githubusercontent.com/75740551/137483565-492ea391-4806-4113-b63b-9c29181dc29a.png)
# Styling / Themes
If you want to change the CSS styles of the control you can do so by adding an CSS-file to your TwinCAT HMI Project. 

![enter image description here](https://user-images.githubusercontent.com/75740551/136960543-2754f43e-d9e3-4136-859a-dadfc7e00764.png)

Here is the list of the available CSS variables that the control uses;
[ui-range css variables](https://github.com/yairEO/ui-range/blob/master/ui-range.scss#L2-L34)
