/**
 * This file is part of Shuup.
 *
 * Copyright (c) 2012-2018, Shuup Inc. All rights reserved.
 *
 * This source code is licensed under the OSL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import m from "mithril";
import responsiveUploadHint from "./responsiveUploadHint";

export default function(ctrl, folder) {  // eslint-disable-line no-unused-vars
    return m("div.empty-folder", [
        m("div.empty-image",
            m("img", {src: require("./file-icons.svg")})
        ),
        m("div.empty-text", responsiveUploadHint)
    ]);
}
