declare const _default: {
    controlPanelSections: ({
        label: string;
        expanded: boolean;
        controlSetRows: string[][];
        tabOverride?: undefined;
    } | {
        label: string;
        expanded: boolean;
        tabOverride: string;
        controlSetRows: (string[] | ({
            name: string;
            config: {
                type: string;
                label: string;
                default: string;
                choices: string[][];
                description: string;
                freeForm?: undefined;
                renderTrigger?: undefined;
            };
        } | {
            name: string;
            config: {
                type: string;
                freeForm: boolean;
                label: string;
                renderTrigger: boolean;
                default: string;
                choices: string[][];
                description: string;
            };
        })[])[];
    })[];
    controlOverrides: {
        entity: {
            label: string;
            description: string;
        };
        metric: {
            label: string;
            description: string;
        };
        linear_color_scheme: {
            renderTrigger: boolean;
        };
    };
};
export default _default;
//# sourceMappingURL=controlPanel.d.ts.map