import React from "react";
import { Card, CardBody, CardHeader, Row, Button } from "reactstrap";
import Layout from "layouts";

const Help = () => {
    const jsonData = [{
        "question": "What is Framerate?",
        "answer": "Frame rate (expressed in frames per second or FPS) is the frequency (rate) at which consecutive images called frames appear on a display. The term applies equally to film and video cameras, computer graphics, and motion capture systems. Frame rate may also be called the frame frequency, and be expressed in hertz."
    }, {
        "question": "What is Bitrate?",
        "answer": "Bitrate, as the name implies, describes the rate at which bits are transferred from one location to another. In other words, it measures how much data is transmitted in a given amount of time. Bitrate is commonly measured in bits per second (bps), kilobits per second (Kbps), or megabits per second (Mbps)."
    }, {
        "question": "What is Concurrent Plays?",
        "answer": "One of the many issues that makes delivering video over the internet difficult is both predicting and then accommodating the maximum number of people who might connect and watch the stream at the exact same time; this is what we call peak concurrent plays (or, PCP)."
    }, {
        "question": "What is Ended Plays",
        "answer": "In video streaming ‘all good things come to an end’ is an ended play. The Ended Plays metric measures number of plays that ended during the selected interval. To count as an ended play, the viewing session within the interval must have at least one video frame that played. This metric counts only viewing sessions that played and ended."
    }, {
        "question": "What is Plays?",
        "answer": "Now that we have explored the definitions and details of Conviva’s startup metrics (Attempts, Video Startup Time (VST), Exits Before Video Start (EBVS), and Video Start Failures (VSF)), let’s look at the metric most visible to viewers, Plays."
    }, {
        "question": "What is Rebuffering Ratio?",
        "answer": "Conviva measures this important Quality of Experience (QoE) metric asRebuffering Ratio — the percentage of total video viewing time (playTime + rebufferingTime) during which viewers experienced buffering. Both play time and rebuffering time are determined based on player state ('playing' and 'buffering'), playhead movement, and frame rate progression. Rebuffering time includes both seek and non-seek rebuffering, but does not include the buffering time before the first frame of a video is displayed or elapsed time while the video is paused."
    }];
    return (
        <React.Fragment>
            <div className="d-md-flex pb-4 pt-5 pt-md-7">
                <div className="container-fluid d-flex justify-content-between">
                    <div>

                    </div>
                    <div>
                        <h2>Help</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Row>
                    {jsonData.map((data, i) => {
                        return (
                            <Card key={i} className="d-flex help-card-margin">
                                <CardHeader>
                                    <Button className="icon icon-shape icon-sm bg-success text-white rounded-circle shadow">
                                        <i className={`fas fa-question`} />
                                    </Button>
                                    {` ${data.question}`}
                                </CardHeader>
                                <CardBody>
                                    <p className="card-text">{data.answer}</p>
                                </CardBody>
                            </Card>
                        );
                    })}
                </Row>
            </div>
        </React.Fragment>
    );
};

Help.layout = Layout;

export default Help;
