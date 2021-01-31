import React from "react";

type AppTitlePropsType = {
    title: string
}

const AppTitle = (props: AppTitlePropsType) => {
    return <div>
        {props.title}
    </div>
}

export default AppTitle;
