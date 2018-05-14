/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import ContentTypeInterface from "../content-type.d";

export interface ContentTypeReadyEventParamsInterface {
    id: string;
    block: ContentTypeInterface;
}