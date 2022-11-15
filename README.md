# InfotableInspectorWidgetTWX

ThingWorx widget can bind to a InfoTable and provides useful information which would need service calls to the backend otherwise.

Features:
* Row Count
* Is Empty
* Has Rows
* Select All Rows
* Clear Selected Rows

## Configuration
### Designtime
- Properties  
![Alt text](/readme/properties.png?raw=true "Bindable Properties")
- Mashup  Builder
![Alt text](/readme/ide.png?raw=true "Mashup Builder")

### Runtime
- invisible

## Build

Execute `gradlew clean build`.

Optional build parameters:
* BUILD_NUMBER
* BUILD_SOURCEBRANCH
* BUILD_SOURCEVERSION
* PACKAGE_VERSION

e.g. `gradlew clean build -PBUILD_NUMBER=123 -PBUILD_SOURCEBRANCH=123 -PBUILD_SOURCEVERSION=123 -PPACKAGE_VERSION=1.0.123`