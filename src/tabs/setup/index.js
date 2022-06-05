/*
 index.js - ESP3D WebUI navigation tab file

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
import { ViewContainerFn } from "../../areas"
import { ButtonImg } from "../../components/Controls"
import { T } from "../../components/Translations"
import { ArrowRight } from "preact-feather"
import { useUiContextFn } from "../../contexts"

const SetupTab = () => {
    console.log("setuptab")
    return (
        <div id="setup" class="empty fullscreen">
            <div class="centered text-primary">
                <div class="m-2"> {T("S204")}</div>

                <ButtonImg
                    icon={<ArrowRight />}
                    label={T("S203")}
                    onclick={() => {
                        useUiContextFn.haptic()
                        ViewContainerFn.setShowSetup(true)
                    }}
                />
            </div>
        </div>
    )
}

export { SetupTab }