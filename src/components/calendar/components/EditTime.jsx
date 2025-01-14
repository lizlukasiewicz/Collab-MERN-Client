import styled from "styled-components"

const HOURS = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
const MINUTES = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];

export default function EditTime({ form, setForm }) {
    const allDaySelect = (checked) => {
        if (checked) {
          setForm({
            ...form,
            start: { ...form.start, time: { ...form.start.time, allday: true } },
            end: { ...form.end, time: { ...form.end.time, allday: true } },
          });
        } else {
          setForm({
            ...form,
            start: { ...form.start, time: { ...form.start.time, allday: false } },
            end: { ...form.end, time: { ...form.end.time, allday: false } },
          });
        }
      };
    
      const onStartHourChange = (value) => {
        setForm({
          ...form,
          start: { ...form.start, time: { ...form.start.time, hours: value } },
        });
      };
      const onStartMinChange = (value) => {
        setForm({
          ...form,
          start: { ...form.start, time: { ...form.start.time, minutes: value } },
        });
      };
      const onStartAPChange = (value) => {
        setForm({
          ...form,
          start: { ...form.start, time: { ...form.start.time, ap: value } },
        });
      };
      const onEndHourChange = (value) => {
        setForm({
          ...form,
          end: { ...form.end, time: { ...form.end.time, hours: value } },
        });
      };
      const onEndMinChange = (value) => {
        setForm({
          ...form,
          end: { ...form.end, time: { ...form.end.time, minutes: value } },
        });
      };
      const onEndAPChange = (value) => {
        setForm({
          ...form,
          end: { ...form.end, time: { ...form.end.time, ap: value } },
        });
      };   
    return(
        <div>
            <TimeSection>
        <Label className="TimeLabel">Time</Label>{" "}
        <div className="AllDaySection">
          <input
            type="checkbox"
            className="checkBoxBox"
            onChange={(ev) => allDaySelect(ev.target.checked)}
            defaultValue={form.start.time.allday}
          />
          <label>All-day</label>
        </div>
      </TimeSection>
      <TimeRange>
        <Select
          onChange={(ev) => onStartHourChange(ev.target.value)}
          defaultValue={form.start.time.hours}
        >
          <option hidden></option>
          {HOURS.map((hour) => (
            <option>{hour}</option>
          ))}
        </Select>
        :
        <Select
          onChange={(ev) => onStartMinChange(ev.target.value)}
          defaultValue={form.start.time.minutes}
        >
          <option hidden></option>
          {MINUTES.map((min) => (
            <option>{min}</option>
          ))}
        </Select>
        <Select
          onChange={(ev) => onStartAPChange(ev.target.value)}
          defaultValue={form.start.time.ap}
        >
          <option hidden></option>
          <option>AM</option>
          <option>PM</option>
        </Select>
            <h3>👉🏻</h3>
        <Select
          onChange={(ev) => onEndHourChange(ev.target.value)}
          defaultValue={form.end.time.hours}
        >
          <option hidden></option>
          {HOURS.map((hour) => (
            <option>{hour}</option>
          ))}
        </Select>
        :
        <Select
          onChange={(ev) => onEndMinChange(ev.target.value)}
          defaultValue={form.end.time.minutes}
        >
          <option hidden></option>
          {MINUTES.map((min) => (
            <option>{min}</option>
          ))}
        </Select>
        <Select
          onChange={(ev) => onEndAPChange(ev.target.value)}
          defaultValue={form.end.time.ap}
        >
          <option hidden></option>
          <option>AM</option>
          <option>PM</option>
        </Select>
      </TimeRange>
        </div>
    )
}
const Label = styled.label`
  padding-bottom: 10px;
  display: block;
  font-size: 1.2rem;
`;
const TimeSection = styled.div`
  display: flex;
  justify-content: space-between;
  .TimeLabel {
    display: inline-block;
  }
  .AllDaySection {
    font-size: 1.2rem;
  }
  .checkBoxBox {
    margin: 0 5px;
  }
`;
const TimeRange = styled.div`
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  appearance: none;
  padding: 1px 6px;
  margin: 0 2px;
  font-size: 1.1rem;
  border: none;
  background-color: #f2f2f2;
`;