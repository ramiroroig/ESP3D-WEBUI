/*
 index.js - ESP3D WebUI Target file

 Copyright (c) 2020 Luc Lebosse. All rights reserved.

 This code is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.

 This code is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public
 License along with This code; if not, write to the Free Software
 Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
import { h } from "preact"
import { iconsTarget } from "./icons"
import { files } from "./files"
import { processor } from "./processor"
import { defaultPanelsList } from "./panels"
import { MachineSettings } from "./MachineSettings"
import {
    InformationsControls,
    QuickButtonsBar,
    MixedExtrudersControl,
} from "./Controls"
import {
    TargetContextProvider,
    useTargetContext,
    useTargetContextFn,
} from "./TargetContext"
import { AppLogo } from "../../../components/Images/logo"
import { AppLogo as WebUILogo } from "../../../components/Images/logo"
/*
GRBL            10
MARLIN          20
MARLIN_EMBEDDED 30
SMOOTHIEWARE    40
REPETIER        50
FLUIDNC         60
REPRAP          70
*/
const TargetName = "RepRap"
const TargetType = "Printer3D"
const TargetId = 70
const Target = "RepRap"
const webUIbuild = "RR2"
const Name = "ESP3D"
const fwUrl = "https://github.com/luc-github/ESP3D/tree/3.0"
const variablesList = []
const restartdelay = 30

export {
    MachineSettings,
    Target,
    TargetId,
    TargetName,
    TargetType,
    fwUrl,
    Name,
    files,
    iconsTarget,
    processor,
    restartdelay,
    defaultPanelsList,
    TargetContextProvider,
    useTargetContext,
    useTargetContextFn,
    webUIbuild,
    InformationsControls,
    variablesList,
    AppLogo,
    WebUILogo,
    QuickButtonsBar,
    MixedExtrudersControl,
}