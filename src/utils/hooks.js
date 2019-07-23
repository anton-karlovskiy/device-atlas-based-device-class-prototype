/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// ray test touch <
import { useState, useEffect } from 'react';
import axios from 'axios';

import { DEVICE_API_URL } from '../config';

const unsupportMessage = 'The device is not detected.';

const useDeviceClass = () => {
  const [deviceParamSet, setDeviceParamSet] = useState(null);

  useEffect(() => {
    const getDeviceClass = async () => {
      let matchedBenchmark;
      try {
        const { data: deviceProperites } = await axios.get(DEVICE_API_URL);
        console.log('ray : ***** deviceProperites => ', deviceProperites);

        // const { data: { brand, name, device } } = await axios.get(`${USERSTACK_API_URL}?access_key=${USERSTACK_API_KEY}&ua=${uastring}`);
        // if (device.is_mobile_device) {
        //   const { data: { devices: androidBenchmarks } } = await axios.get(`${CORS_ANYWHERE}${ANDROID_BENCHMARKS_URL}`);
        //   // iOS devices are not supported in userstack.com for now, but you can get accurate device info in deviceatlas.com
        //   // const { data: { devices: iosBenchmarks } } = await axios.get(`${CORS_ANYWHERE}${IOS_BENCHMARKS_URL}`);
        //   const allBenchmarks = [...androidBenchmarks/*, ...iosBenchmarks*/];
        //   const modelName = `${brand} ${name}`;
        //   matchedBenchmark = allBenchmarks.find(benchmark => benchmark.name === modelName);
        // }
      } catch (error) {
        console.log('[getDeviceClass] error => ', error);
      }
  
      if (matchedBenchmark) {
        setDeviceParamSet({...matchedBenchmark});
      } else {
        setDeviceParamSet({unsupportMessage});
      }
    };
    
    getDeviceClass();
  }, []);

  return deviceParamSet;
};

export { useDeviceClass };
// ray test touch >
