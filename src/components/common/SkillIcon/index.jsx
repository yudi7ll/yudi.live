import React from 'react';
import pt from 'prop-types';

// Icons
import {
  LinuxIcon,
  FigmaIcon,
  FirefoxIcon,
  GatsbyIcon,
  GitIcon,
  JavascriptIcon,
  LaravelIcon,
  NextIcon,
  NodejsIcon,
  PhpIcon,
  ReactIcon,
  ReduxIcon,
  WordpressIcon,
  VimIcon,
} from "components/icons";

function SkillIcon(props) {

  const RenderIcon = ({ Icon, style = {} }) => {
    return (
      <div
        className="d-inline-block rounded-circle border shadow p-2 m-2"
        style={{
          backgroundColor: '#f2f2f2',
          overflow: "hidden",
          ...style,
        }}
        key={Icon}
      >
        <Icon height="45px" width="45px" />
      </div>
    )
  }

  RenderIcon.propTypes = {
    Icon: pt.instanceOf(Object).isRequired,
    style: pt.instanceOf(Object)
  }


  return (
    <div {...props}>
      {
        [
          { Icon: LinuxIcon },
          { Icon: JavascriptIcon, style: { backgroundColor: "#F7DF1E" } },
          { Icon: PhpIcon },
          { Icon: ReactIcon },
          { Icon: ReduxIcon },
          { Icon: LaravelIcon },
          { Icon: NodejsIcon },
          { Icon: NextIcon },
          { Icon: GatsbyIcon },
          { Icon: GitIcon },
          { Icon: VimIcon },
          { Icon: FirefoxIcon },
          { Icon: WordpressIcon },
          { Icon: FigmaIcon },
        ].map(RenderIcon)
      }
    </div>
  );
}

export default SkillIcon;
