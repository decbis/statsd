/*

Required Variables:

  port:             StatsD listening port [default: 8125]

Graphite Required Variables:

(Leave these unset to avoid sending stats to Graphite.
 Set debug flag and leave these unset to run in 'dry' debug mode -
 useful for testing statsd clients without a Graphite server.)

  graphiteHost:     hostname or IP of Graphite server
  graphitePort:     port of Graphite server

Optional Variables:

  backends:         an array of backends to load. Each backend must exist
                    by name in the directory backends/. If not specified,
                    the default graphite backend will be loaded.
  debug:            debug flag [default: false]
  port:             port to listen for messages on over UDP [default: 8125]
  mgmt_port:        port to run the management TCP interface on [default: 8126]
  debugInterval:    interval to print debug information [ms, default: 10000]
  dumpMessages:     log all incoming messages
  flushInterval:    interval (in ms) to flush to Graphite
  altPrefixList:    Prefixes in this list of prefixes will bypass the normal logic
                    of separating messages to carbon into "Stats" and "timers" and
                    will instead use the default hierarchy.
  percentThreshold: for time information, calculate the Nth percentile(s)
                    (can be a single value or list of floating-point values)
                    [%, default: 90]
  summarizedPrefix: A prefix that will be matched for receiving summaries of data
                    instead of raw data.  The path after the prefix will be used
                    to send data.  E.g. summarized.Plaform.foo.bar will indicate that 
                    the stats being sent are already a summary, and will post those
                    stats to Platform.foo.bar (and if 'Platform." is in the altPrefixList,
                    then this will bypass the "stats" and "timers" categorization
                    per the config there.
  altPrefixList:    Prefixes in this list of prefixes will bypass the normal logic
                    of separating messages to carbon into "Stats" and "timers" and
                    will instead use the default hierarchy.
  keyFlush:         log the most frequently sent keys [object, default: undefined]
    interval:       how often to log frequent keys [ms, default: 0]
    percent:        percentage of frequent keys to log [%, default: 100]
    log:            location of log file for frequent keys [default: STDOUT]

*/
{
  graphitePort: 2003
, graphiteHost: "graphite.host.com"
, port: 8125
, summarizedPrefix: 'summarized.'
, altPrefixList : ['Platform.'] 
}
